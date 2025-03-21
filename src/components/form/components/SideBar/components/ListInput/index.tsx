import tw from 'twin.macro';
import React from 'react';
import { ConfirmDialog } from '../../../../components/ConfirmDialog';
import { WarningDialog } from '../../../../components/WarningDialog';
import { UploadDialog } from '../../../../components/UploadDialog';
import { ThemeConfig } from '~root/hooks';

interface Props {
  handleApply: () => void;
  hasPendingChanges: boolean;
  saveToLocalStorage: () => void;
  isConfirmDialogOpen: boolean;
  handleToggleConfirmDialog: () => void;
  handleConfirmClear: () => void;
  handleSelectThemeConfig: (args: ThemeConfig) => void;
  themeConfig: ThemeConfig;
}

export const ListInput = ({
  handleApply,
  hasPendingChanges,
  saveToLocalStorage,
  isConfirmDialogOpen,
  handleToggleConfirmDialog,
  handleConfirmClear,
  handleSelectThemeConfig,
  themeConfig,
}: Props) => {
  const [isWarningDialogOpen, setIsWarningDialogOpen] = React.useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = React.useState(false);

  const handleSaveToStorage = () => {
    if (hasPendingChanges) {
      setIsWarningDialogOpen(true);
    } else {
      saveToLocalStorage();
    }
  };

  const handleCloseWarningDialog = () => {
    setIsWarningDialogOpen(false);
  };

  const handleOpenUploadDialog = () => {
    setIsUploadDialogOpen(true);
  };

  const handleCloseUploadDialog = () => {
    setIsUploadDialogOpen(false);
  };

  return (
    <>
      <h2 tw="text-slate-700" css={[tw`text-[rgb(255,0,0)] mt-2`]}>
        List input
      </h2>
      <div tw="flex flex-col gap-3">
        <button
          className="droppable-element border border-black/50 border-solid rounded-md"
          draggable={true}
          tw="py-2 cursor-pointer select-none"
          onDragStart={(e) => e.dataTransfer.setData('text/plain', 'NumberField')}
        >
          Number field
        </button>
        <button
          className="droppable-element border border-black/50 border-solid rounded-md"
          draggable={true}
          tw="py-2 cursor-pointer select-none"
          onDragStart={(e) => e.dataTransfer.setData('text/plain', 'TextField')}
        >
          Text Field
        </button>
        <button
          className="droppable-element border border-black/50 border-solid rounded-md"
          draggable={true}
          tw="py-2 cursor-pointer select-none"
          onDragStart={(e) => e.dataTransfer.setData('text/plain', 'PasswordField')}
        >
          Password Field
        </button>
        <div tw="relative">
          {hasPendingChanges && (
            <div tw="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs animate-pulse">
              !
            </div>
          )}
          <button onClick={handleApply} className="border border-black/30 border-solid rounded-md w-full">
            Apply
          </button>
        </div>
        <div tw="relative">
          <button
            onClick={handleOpenUploadDialog}
            tw="w-full py-2 bg-blue-600 text-white rounded-md border border-blue-700 transition-all duration-200
               hover:bg-blue-500 hover:border-blue-600 hover:shadow-md
               active:bg-blue-700 active:border-blue-800 active:transform active:scale-95
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
               disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upload Theme Config
          </button>
        </div>
        <div tw="relative">
          <button
            onClick={handleSaveToStorage}
            tw="w-full py-2 bg-green-600 text-white rounded-md border border-green-700 transition-all duration-200
               hover:bg-green-500 hover:border-green-600 hover:shadow-md
               active:bg-green-700 active:border-green-800 active:transform active:scale-95
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
               disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save storage
          </button>
        </div>
        <div tw="relative">
          <button
            onClick={handleToggleConfirmDialog}
            tw="w-full py-2 bg-red-600 text-white rounded-md border border-red-700 transition-all duration-200
               hover:bg-red-500 hover:border-red-600 hover:shadow-md
               active:bg-red-700 active:border-red-800 active:transform active:scale-95
               focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
               disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear storage
          </button>
        </div>
      </div>

      <ConfirmDialog open={isConfirmDialogOpen} onClose={handleToggleConfirmDialog} onConfirm={handleConfirmClear} />
      <WarningDialog open={isWarningDialogOpen} onClose={handleCloseWarningDialog} />
      <UploadDialog
        open={isUploadDialogOpen}
        onClose={handleCloseUploadDialog}
        handleSelectThemeConfig={handleSelectThemeConfig}
        themeConfig={themeConfig}
      />
    </>
  );
};
