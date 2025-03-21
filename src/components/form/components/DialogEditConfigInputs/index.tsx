import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SketchPicker } from 'react-color';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import 'twin.macro';
import { Checkbox } from '@mui/material';
import { ThemeConfig } from '~root/hooks';
import { OptionThemeConfig, SubOptionThemeConfig } from '../../types';
interface Props {
  open: boolean;
  setOpen: (args: boolean) => void;
  handleEditFormInput: (config: ThemeConfig) => void;
  themeConfig: ThemeConfig;
}

export function DialogEditConfigInputs({ open, setOpen, handleEditFormInput, themeConfig }: Props) {
  const [values, setValues] = React.useState<ThemeConfig>(themeConfig);

  const handleSubmit = () => {
    handleEditFormInput({ ...values });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const handleChangeOption = (
    option: OptionThemeConfig,
    subOption: SubOptionThemeConfig,
    value: string | number | boolean,
  ) => {
    setValues((prev: ThemeConfig) => {
      const newResult = { ...prev };
      return {
        ...newResult,
        [option]: subOption
          ? {
              ...newResult?.[option],
              [subOption]: value,
            }
          : value,
      };
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Edit global style input</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            <Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                  <Typography component="span">Container</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div tw="grid grid-cols-2 md:grid-cols-2 gap-3">
                    <div tw="flex flex-col w-[-webkit-fill-available]">
                      <div>Gap X</div>
                      <input
                        type="text"
                        placeholder="Gap X"
                        tw="border border-solid border-black p-2 rounded-md"
                        defaultValue={themeConfig?.containerCss?.gapX}
                        onChange={(e) => handleChangeOption('containerCss', 'gapX', e.target.value)}
                      />
                    </div>
                    <div tw="flex flex-col">
                      <div>Gap Y</div>
                      <input
                        type="text"
                        placeholder="Gap Y"
                        tw="border border-solid border-black p-2 rounded-md"
                        defaultValue={themeConfig?.containerCss?.gapY}
                        onChange={(e) => handleChangeOption('containerCss', 'gapY', e.target.value)}
                      />
                    </div>
                    <div tw="flex flex-col w-[-webkit-fill-available]">
                      <div>Row Height</div>
                      <input
                        type="number"
                        placeholder="Row Height"
                        tw="border border-solid border-black p-2 rounded-md"
                        defaultValue={themeConfig?.containerCss?.rowHeight || 43}
                        onChange={(e) => handleChangeOption('containerCss', 'rowHeight', Number(e.target.value))}
                      />
                    </div>
                    <div tw="flex flex-col">
                      <div>Direction</div>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={values?.containerCss?.direction}
                        sx={{
                          '& .MuiInputBase-input': {
                            padding: '10px',
                          },
                        }}
                        onChange={(e) => handleChangeOption('containerCss', 'direction', e.target.value)}
                      >
                        <MenuItem value={'column'}>Column</MenuItem>
                        <MenuItem value={'row'}>Row</MenuItem>
                      </Select>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                <Typography component="span">Border</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div tw="grid grid-cols-2 md:grid-cols-2 gap-3">
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Border width</div>
                    <input
                      type="text"
                      placeholder="border width"
                      defaultValue={themeConfig?.border?.borderWidth}
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('border', 'borderWidth', e.target.value)}
                    />
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Border radius</div>
                    <input
                      type="text"
                      defaultValue={themeConfig?.border?.borderRadius}
                      placeholder="border radius"
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('border', 'borderRadius', e.target.value)}
                    />
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available] relative" className="group">
                    <div tw="">Border color</div>
                    <SketchPicker
                      color={values?.border?.borderColor}
                      onChangeComplete={(color) => handleChangeOption('border', 'borderColor', color.hex)}
                    />
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available] relative" className="group">
                    <div tw="">Border color hover</div>
                    <SketchPicker
                      color={values?.border?.hoverColor}
                      onChangeComplete={(color) => handleChangeOption('border', 'hoverColor', color.hex)}
                    />
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available] relative" className="group">
                    <div tw="">Border color focus</div>
                    <SketchPicker
                      color={values?.border?.focusColor}
                      onChangeComplete={(color) => handleChangeOption('border', 'focusColor', color.hex)}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                <Typography component="span">Label</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div tw="grid grid-cols-2 md:grid-cols-2 gap-3">
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Label text size</div>
                    <input
                      type="text"
                      placeholder="Label size"
                      defaultValue={themeConfig?.label?.fontSize}
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => {
                        handleChangeOption('label', 'fontSize', e.target.value);
                        handleChangeOption('label', 'lineHeight', e.target.value);
                      }}
                    />
                  </div>
                  <div tw="flex flex-col">
                    <div>Line height</div>
                    <input
                      type="text"
                      placeholder="Line height"
                      defaultValue={themeConfig?.label?.lineHeight}
                      value={values?.label?.lineHeight}
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('label', 'lineHeight', e.target.value)}
                    />
                  </div>

                  <div tw="flex flex-col">
                    <div>Font weight</div>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      defaultValue={themeConfig?.label?.fontWeight}
                      value={values?.label?.fontWeight}
                      sx={{
                        '& .MuiInputBase-input': {
                          padding: '10px',
                        },
                      }}
                      onChange={(e) => handleChangeOption('label', 'fontWeight', e.target.value)}
                    >
                      <MenuItem value={'300'}>Light</MenuItem>
                      <MenuItem value={'400'}>Normal</MenuItem>
                      <MenuItem value={'500'}>Medium</MenuItem>
                      <MenuItem value={'600'}>Semibold</MenuItem>
                      <MenuItem value={'700'}>Bold</MenuItem>
                    </Select>
                  </div>
                  <div tw="flex flex-col">
                    <div>Show label</div>
                    <div>
                      <Checkbox
                        defaultChecked={themeConfig?.label?.clear}
                        onChange={(e) => handleChangeOption('label', 'clear', e.target.checked)}
                      />
                    </div>
                  </div>

                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Label text color</div>
                    <SketchPicker
                      color={values?.label?.color}
                      onChangeComplete={(color) => handleChangeOption('label', 'color', color.hex)}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                <Typography component="span">Text</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div tw="grid grid-cols-2 md:grid-cols-2 gap-3">
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Text size</div>
                    <input
                      type="text"
                      defaultValue={themeConfig?.text?.fontSize}
                      placeholder="Text size"
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('text', 'fontSize', e.target.value)}
                    />
                  </div>

                  <div tw="flex flex-col">
                    <div>Line height</div>
                    <input
                      type="text"
                      defaultValue={themeConfig?.text?.lineHeight}
                      placeholder="Line height"
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('text', 'lineHeight', e.target.value)}
                    />
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Padding X</div>
                    <input
                      type="text"
                      placeholder="Padding X"
                      defaultValue={themeConfig?.text?.paddingX}
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('text', 'paddingX', e.target.value)}
                    />
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Padding Y</div>
                    <input
                      type="text"
                      placeholder="Padding Y"
                      defaultValue={themeConfig?.text?.paddingY}
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('text', 'paddingY', e.target.value)}
                    />
                  </div>
                  <div tw="flex flex-col">
                    <div>Font weight</div>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      defaultValue={themeConfig?.text?.fontWeight}
                      value={values?.text?.fontWeight}
                      sx={{
                        '& .MuiInputBase-input': {
                          padding: '10px',
                        },
                      }}
                      onChange={(e) => handleChangeOption('text', 'fontWeight', e.target.value)}
                    >
                      <MenuItem value={'300'}>Light</MenuItem>
                      <MenuItem value={'400'}>Normal</MenuItem>
                      <MenuItem value={'500'}>Medium</MenuItem>
                      <MenuItem value={'600'}>Semibold</MenuItem>
                      <MenuItem value={'700'}>Bold</MenuItem>
                    </Select>
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Opacity placeholder</div>
                    <input
                      type="text"
                      placeholder="Opacity"
                      defaultValue={themeConfig?.text?.placeholderOpacity}
                      tw="border border-solid border-black p-2 rounded-md"
                      onChange={(e) => handleChangeOption('text', 'placeholderOpacity', e.target.value)}
                    />
                  </div>
                  <div tw="flex flex-col w-[-webkit-fill-available]">
                    <div>Text color</div>
                    <SketchPicker
                      color={values?.text?.color}
                      onChangeComplete={(color) => handleChangeOption('text', 'color', color.hex)}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
