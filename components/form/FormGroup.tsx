function FormGroup({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return <div className="flex flex-col gap-y-2 items-start">{children}</div>;
}

export default FormGroup;
