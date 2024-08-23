"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return null;
}
