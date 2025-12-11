# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Running the Application
```pwsh
npm start
# or
ng serve
```
Application runs at `http://localhost:4200/` with hot-reload enabled.

### Building
```pwsh
npm run build              # Production build
npm run build -- --configuration development
npm run watch             # Watch mode for development
```
Build artifacts are stored in `dist/` directory.

### Testing
```pwsh
npm test                  # Run all tests with Vitest
ng test                   # Same as above
```
This project uses Vitest as the test runner (not Karma/Jasmine).

### Code Generation
```pwsh
ng generate component component-name
ng generate service service-name
ng generate --help        # See all available schematics
```

## Project Architecture

### Technology Stack
- **Angular 21.0** with standalone components (NgModules not used)
- **TypeScript 5.9** with strict mode enabled
- **Vitest** for unit testing
- **Signals** for state management (preferred over RxJS for local state)

### Project Structure
```
src/
├── app/
│   ├── app.ts           # Root component (named 'App', not 'AppComponent')
│   ├── app.config.ts    # Application configuration and providers
│   ├── app.routes.ts    # Route definitions
│   ├── app.html         # Root template
│   └── app.css          # Root styles
├── main.ts              # Application bootstrap
└── styles.css           # Global styles
```

### Key Architectural Decisions

**Component Architecture:**
- All components use standalone architecture (default in Angular 21)
- DO NOT set `standalone: true` explicitly in decorators
- Root component is named `App` (not `AppComponent`)
- Components use OnPush change detection strategy
- Use `input()` and `output()` functions instead of `@Input`/`@Output` decorators

**State Management:**
- Use signals for local component state (e.g., `signal()`, `computed()`)
- Call `update()` or `set()` on signals, NOT `mutate()`
- Use RxJS observables only when working with async streams

**Dependency Injection:**
- Use `inject()` function instead of constructor injection
- Services use `providedIn: 'root'` for singleton pattern

**Templates:**
- Use modern control flow: `@if`, `@for`, `@switch` (NOT `*ngIf`, `*ngFor`, `*ngSwitch`)
- Use `class` and `style` bindings (NOT `ngClass` or `ngStyle`)
- Do NOT use arrow functions in templates (unsupported)
- Do NOT assume globals like `new Date()` are available in templates

**Host Bindings:**
- Use `host` object in `@Component`/`@Directive` decorators
- Do NOT use `@HostBinding` or `@HostListener` decorators

**Images:**
- Use `NgOptimizedImage` for all static images
- Note: `NgOptimizedImage` does not work for inline base64 images

**Forms:**
- Prefer Reactive Forms over Template-driven Forms

**Routing:**
- Implement lazy loading for feature routes when applicable
- Routes defined in `app.routes.ts`

### TypeScript Configuration
- Strict mode enabled with comprehensive checks
- `noImplicitReturns`, `noFallthroughCasesInSwitch`, `noImplicitOverride`
- Angular strict templates enabled
- Avoid `any` type; use `unknown` when type is uncertain

### Code Formatting
Prettier is configured with:
- Print width: 100
- Single quotes: enabled
- Angular HTML parser for `.html` files

### Accessibility
- Code MUST pass AXE checks
- MUST follow WCAG AA minimums (focus management, color contrast, ARIA attributes)

### Build Constraints
Production builds have size budgets:
- Initial bundle: warning at 500kB, error at 1MB
- Component styles: warning at 4kB, error at 8kB
