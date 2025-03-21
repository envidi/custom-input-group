import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { initThemeConfig, ThemeConfig } from '~root/hooks';
import { instance } from '~root/apis';

interface Props {
  open: boolean;
  onClose: () => void;
  handleSelectThemeConfig: (args: ThemeConfig) => void;
  themeConfig: ThemeConfig;
}

export const UploadDialog = ({ open, onClose, handleSelectThemeConfig, themeConfig }: Props) => {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const queryClient = useQueryClient();
  const { data, refetch } = useQuery({
    queryKey: ['files'],
    queryFn: async () => {
      const { data } = await instance.get('configs');
      return data;
    },
  });
  const { mutateAsync: deleteConfig } = useMutation({
    mutationFn: async (configName: string) => {
      await instance.delete('configs/' + configName);
    },
    onSuccess: () => {
      toast.success('Config deleted successfully');
    },
    onError: () => {
      toast.success('Config deleted failed');
    },
  });
  const { mutate: uploadConfig } = useMutation({
    mutationFn: async (value: FormData) => {
      await instance.post('upload-json', value);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['files'] });
    },
  });
  const { mutateAsync: getConfig } = useMutation({
    mutationFn: async (configName: string) => {
      const { data } = await instance.get('configs/' + configName);
      return data;
    },
  });

  const handleDeleteConfig = async (configName: string) => {
    await deleteConfig(configName);
    await refetch();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    setSelectedFiles(files);
  };
  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      toast.error('No files selected');
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });
    uploadConfig(formData);
  };
  const handleSetGlobalConfig = async (config: string) => {
    const themeConfigRespond = await getConfig(config);
    const root = themeConfigRespond?.content?.components;
    const label = {
      ...root?.MuiTypography?.styleOverrides?.root?.['& label'],
    };
    const text = {
      ...root?.MuiTextField?.styleOverrides?.root?.['& .MuiInputBase-root'],
      placeholderOpacity:
        root?.MuiTextField?.styleOverrides?.root?.['& .MuiInputBase-root input::placeholder']?.opacity,
      paddingY: root?.MuiTextField?.styleOverrides?.root?.['& .MuiInputBase-input']?.padding?.split(' ')?.[0],
      paddingX: root?.MuiTextField?.styleOverrides?.root?.['& .MuiInputBase-input']?.padding?.split(' ')?.[1],
    };
    const border = {
      ...root?.MuiTextField?.styleOverrides?.root?.['& .MuiOutlinedInput-root']?.['& fieldset'],
      focusColor: root?.MuiOutlinedInput?.styleOverrides?.root?.['&.Mui-focused fieldset']?.borderColor,
      hoverColor: root?.MuiOutlinedInput?.styleOverrides?.root?.['&:hover fieldset']?.borderColor,
    };
    const getThemeConfig = {
      label: { clear: true, ...label },
      text: {
        ...text,
      },
      border: { ...border },
    };
    const { name } = themeConfigRespond;
    if (themeConfig?.name) {
      handleSelectThemeConfig({
        ...initThemeConfig,
      });
    } else {
      handleSelectThemeConfig({
        ...themeConfig,
        ...getThemeConfig,
        name,
      });
    }
  };
  const handleClose = () => {
    onClose();
    setSelectedFiles([]);
  };

  const handleDeleteClick = async (e: React.MouseEvent, configName: string) => {
    e.stopPropagation();
    await handleDeleteConfig(configName);
    if (themeConfig?.name) {
      handleSelectThemeConfig({
        ...initThemeConfig,
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 1,
        },
      }}
    >
      <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#1976d2' }}>
        Upload Theme Configuration
      </DialogTitle>

      <DialogContent>
        {/* Upload Box */}
        <Box
          sx={{
            border: '2px dashed #ccc',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            backgroundColor: '#fafafa',
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: '#1976d2',
              backgroundColor: 'rgba(25, 118, 210, 0.04)',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <label htmlFor="file-upload" style={{ cursor: 'pointer', width: '100%', textAlign: 'center' }}>
            <input
              id="file-upload"
              type="file"
              accept=".json"
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <CloudUploadIcon sx={{ fontSize: 64, color: '#666' }} />
            <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>
              Click to select JSON files
            </Typography>
          </label>
        </Box>
        {selectedFiles.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, color: '#1976d2' }}>
              Selected Files ({selectedFiles.length}):
            </Typography>
            <Box
              sx={{
                maxHeight: 150,
                overflow: 'auto',
                borderRadius: 1,
                border: '1px solid #e0e0e0',
              }}
            >
              {selectedFiles.map((file: File, index: number) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    p: 1.5,
                    backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#fff',
                    borderBottom: '1px solid #e0e0e0',
                    '&:last-child': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  {file.name}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {/* Server Files Section */}
        <Box sx={{ mt: 3 }}>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, color: '#1976d2' }}>
            Available Theme Files:
          </Typography>
          <Box
            sx={{
              maxHeight: 250,
              overflow: 'auto',
              borderRadius: 1,
              border: '1px solid #e0e0e0',
            }}
          >
            {data?.files.map((file: string, index: number) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  backgroundColor:
                    themeConfig?.name === file ? 'rgba(25, 118, 210, 0.08)' : index % 2 === 0 ? '#f5f5f5' : '#fff',
                  borderBottom: '1px solid #e0e0e0',
                  '&:last-child': {
                    borderBottom: 'none',
                  },
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    backgroundColor:
                      themeConfig?.name === file ? 'rgba(25, 118, 210, 0.12)' : 'rgba(25, 118, 210, 0.04)',
                  },
                  position: 'relative',
                  transition: 'all 0.2s ease',
                }}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => handleSetGlobalConfig(file)}
              >
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  {themeConfig?.name === file && <CheckCircleIcon sx={{ color: '#1976d2', fontSize: 20 }} />}
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: themeConfig?.name === file ? 600 : 500,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {file}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      Added on {file.split('-')[1].split('.')[0]}
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  size="small"
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={(e) => handleDeleteClick(e, file)}
                  sx={{
                    color: '#d32f2f',
                    '&:hover': {
                      backgroundColor: 'rgba(211, 47, 47, 0.04)',
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            borderRadius: 1,
            textTransform: 'none',
            px: 3,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleUpload}
          variant="contained"
          disabled={selectedFiles.length === 0}
          sx={{
            borderRadius: 1,
            textTransform: 'none',
            px: 3,
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};
