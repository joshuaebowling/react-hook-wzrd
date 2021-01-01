import { ReactElement } from "react";

declare namespace Wizard {
  interface IWizardContext {
    currentStep: number;
  }
  interface IWizardHookArguments {}
  interface IWizardStepArgument {
    stepData: IWizardStepData;
    StepContent: ReactElement;
  }
  interface IWizardStepData {
    order: number;
    label: string;
  }
}
