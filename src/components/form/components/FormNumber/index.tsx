import * as React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'twin.macro';
import { getValidationRule, getValidationTextRule, ValueValidateOption } from '../../utils';
import { Checkbox } from '@mui/material';
import { ValidateRuleType } from '../../types';
import * as yup from 'yup';
import { OptionsValue } from '../DialogEditConfigInput';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  handleChangeOption: (
    option: OptionsValue,
    subOption: keyof ValueValidateOption,
    value: string | number | boolean,
  ) => void;
}

export const FormNumber = ({ item, handleChangeOption }: Props) => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography component="span">Validate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div tw="grid grid-cols-2 md:grid-cols-2 gap-3">
            <div tw="flex flex-col  w-[-webkit-fill-available]">
              <div>Is Integer</div>
              <div tw="flex">
                <div>
                  <Checkbox
                    defaultChecked={Boolean(
                      getValidationRule(ValidateRuleType.INTEGER, item as { validate: yup.StringSchema }),
                    )}
                    onChange={(e) => handleChangeOption('validate', 'is_integer', e.target.checked)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Text"
                  tw="border border-solid border-black p-2 rounded-md"
                  defaultValue={getValidationTextRule(ValidateRuleType.INTEGER, item as { validate: yup.StringSchema })}
                  onChange={(e) => handleChangeOption('validate', 'text_integer', e.target.value)}
                />
              </div>
            </div>

            <div tw="flex flex-col  w-[-webkit-fill-available]">
              <div>Text Require</div>
              <div tw="flex">
                <input
                  type="text"
                  placeholder="Text"
                  tw="border border-solid border-black p-2 rounded-md"
                  defaultValue={String(item?.validate?.internalTests?.typeError?.OPTIONS?.message)}
                  onChange={(e) => handleChangeOption('validate', 'text_required', e.target.value)}
                />
              </div>
            </div>

            <div tw="flex flex-col  w-[-webkit-fill-available]">
              <div>Max character</div>
              <div tw="flex flex-row w-full gap-2">
                <input
                  type="text"
                  placeholder="max"
                  tw="border border-solid border-black p-2 rounded-md w-2/6"
                  defaultValue={String(
                    getValidationRule(ValidateRuleType.MAX, item as { validate: yup.StringSchema })?.OPTIONS?.params
                      ?.max,
                  )}
                  onChange={(e) => handleChangeOption('validate', 'max', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Text max"
                  defaultValue={String(
                    getValidationTextRule(ValidateRuleType.MAX, item as { validate: yup.StringSchema }) as string,
                  )}
                  tw="border border-solid border-black p-2 rounded-md w-4/6"
                  onChange={(e) => handleChangeOption('validate', 'text_max', e.target.value)}
                />
              </div>
            </div>
            <div tw="flex flex-col  w-[-webkit-fill-available]">
              <div>Min character</div>
              <div tw="flex flex-row w-full gap-2">
                <input
                  type="text"
                  placeholder="min"
                  defaultValue={String(
                    getValidationRule(ValidateRuleType.MIN, item as { validate: yup.StringSchema })?.OPTIONS?.params
                      ?.min,
                  )}
                  tw="border border-solid border-black p-2 rounded-md w-2/6"
                  onChange={(e) => handleChangeOption('validate', 'min', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Text min"
                  defaultValue={String(
                    getValidationTextRule(ValidateRuleType.MIN, item as { validate: yup.StringSchema }) as string,
                  )}
                  tw="border border-solid border-black p-2 rounded-md w-4/6"
                  onChange={(e) => handleChangeOption('validate', 'text_min', e.target.value)}
                />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          <Typography component="span">Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
        {/* <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                  </AccordionActions> */}
      </Accordion>
    </>
  );
};
