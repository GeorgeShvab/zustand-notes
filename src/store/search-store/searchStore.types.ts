export interface SearchStore {
  value: string;
  setValue: (data: string) => void;
  clearValue: () => void;
}
