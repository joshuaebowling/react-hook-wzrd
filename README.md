# react-hook-wzrd

## Extra minimal, albeit too much so, wizard hook

## Important Notes

In my example, you'll notice in `App.tsx` that I've created a variable `stepCount`. I suspect that people will have a problem with this; thus, I will explain my rationale.
If I were to use some kind of internal state, such as `useState`, then as each `WizardStep` adds itself to the step, it would trigger an update to the outer component `App` which would then trigger each `WizardStep` to be re-rendered -- an infinite recursion. The simplest solution, for the sake of demonstation was simply to `var` the stepCount and let it increment in an uncontrolled way. I'm sure there's drawbacks to this, but they aren't apparent.
Perhaps a better solution would externalize the state, perhaps via Redux; or not count the steps at all. Maybe the don't need to be counted after all.
