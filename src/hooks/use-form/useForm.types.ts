export interface UseFormParams<T> {
  initialValues: T;
  onSubmit: (data: T) => void;
}
