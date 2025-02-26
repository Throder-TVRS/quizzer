export type FormField = FromFieldInput | FromFieldTextArea | FromFieldSelect;

interface FormFieldAny {
    id?: number;
    name: string;
    description: string;
    type: string;
    correct_answer?: string
}

export interface FromFieldInput extends FormFieldAny {
    type: 'input';
}

export interface FromFieldTextArea extends FormFieldAny {
    type: 'textarea';
}

export interface FromFieldSelect extends FormFieldAny {
    type: 'select';
    options: Array<string>;
}
