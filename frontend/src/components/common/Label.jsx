"use client";

import * as React from "react";

const Label = ({ className, ...props }) => (
  <label {...props} className={`text-sm ${className}`} />
);

export { Label };
