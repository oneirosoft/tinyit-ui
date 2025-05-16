export const isNullOrEmpty = (value: string | null | undefined): value is undefined | null  =>
    value === null || value === undefined || value.trim() === ''