### Wizard Walkthru

#### Overview

I needed a wizard to break up larger forms into smaller bits

#### How I accomplish this

When `useWizard()` is invoked, it returns the following:
`WizardItem`: a React Component that expects an object with the following properties:
`next`: () => `number` | `null`;

> takes wizard to the next step and returns the newly-set current slide number.
> if already on last slide, does nothing, returns null.
> `prev`: () => `number` | `null`;
> takes wizard to the previous step and returns the newly-set current slide number.
> if already on first slide, does nothing, returns null.
> `currentStep`: `number` the current step
> `next`: the very same `next` function as above.
> `prev`: the very same `prev` function as above.
> `currentStep`: the very same `currentStep` as above.

### Step Labels

See `StepLabel.tsx` and `StepLabels.tsx`.
`StepLabel`: a React Component that applies an `active` class to the step when the `currentStep` = the StepLabel's `step` value.

- `name`: `string` // the name for the step
- `stepNumber`: `number` // the associated step number
- `currentStep`: `number` // the current wizard step

### Step Incrementer

See `StepIncrementer.tsx`
A class used in `useWizard` to increment the number of steps declared for the wizard, it turned out be the most suitable (I could imagine). If you're wondering why: I couldn't place the number of steps in state because it would cause an infinite loop so this seems like the next-simplest way.

Each time `useWizard` is invoked an instance of `StepIncrementer` is created. This is where the total number of steps is maintained. I'm not sure what would happen if you were to invoke the hook more than once -- either in the same component or in different components.
