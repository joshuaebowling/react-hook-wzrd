/// <reference path="./index.d.ts" />
import { createContext } from "react";

const WizardContext = createContext<null | Wizard.IWizardContext>(null);

export default WizardContext;
