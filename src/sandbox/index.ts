import { Rule, chain, schematic } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function sandbox(options: any): Rule {
  return chain([
    schematic('playground', options),
  ])
}
