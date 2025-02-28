import { Button, TextField } from '@mui/material';
import 'twin.macro';
export const InputGroup: React.FC = () => {
  return (
    <div>
      <TextField variant="outlined" />
      <Button>Submit</Button>
    </div>
  );
};
