"use client";

import { Button } from "@nextui-org/react";

interface FormButtonProps {
  isPending: boolean;
  children: React.ReactNode;
}

export default function FormButton({
  children,
  isPending = false,
}: FormButtonProps) {
  return (
    <Button type="submit" isLoading={isPending}>
      {children}
    </Button>
  );
}
