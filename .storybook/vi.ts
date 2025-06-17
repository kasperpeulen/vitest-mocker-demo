import { ModuleMockerMSWInterceptor } from "@vitest/mocker/browser";

import { registerModuleMocker } from "@vitest/mocker/register";

export const vi = registerModuleMocker(
  (globalThisAccessor) =>
    new ModuleMockerMSWInterceptor({ globalThisAccessor }),
);
