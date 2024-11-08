import { QueryClient } from "@tanstack/react-query";

import React from "react";

export const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
