.---
name: frontend-investigator
description: "Investigates and analyzes frontend projects (Next.js, React, Vue): structure, components, patterns, routes, configuration and conventions. Useful to understand code before making changes or solving problems."
---

# Frontend Investigator

## OVERVIEW

Skill especializada en investigar proyectos frontend. Proporciona contexto rápido sobre estructura, componentes, patrones y configuración antes de modificar código.

## CUANDO USAR

- Necesitas entender la estructura de un proyecto frontend
- Buscas archivos específicos (componentes, páginas, hooks)
- Analizas patrones de código y convenciones
- Investigas dependencias y configuración
- Resuelves problemas de routing o estado

## ARCHIVOS A LEER PRIMERO

```
1. package.json              # Depend y scripts
2. next.config.js / vite.config.js  # Config build
3. tsconfig.json           # Config TypeScript
4. CLAUDE.md / README.md  # Guía del proyecto
5. src/main.tsx / index.tsx # Entry point
6. src/App.tsx              # Componente raíz
```

## INVESTIGACIÓN DE ESTRUCTURA

### /estructura
Lista directors y estructura general del proyecto.

### /componentes
Lista todos los componentes con ubicación.

### /rutas
Muestra páginas y rutas del proyecto.

### /hooks
Lista hooks personalizados.

### /utils
Lista funciones utilitarias.

### /styles
Lista archivos de estilos.

### /buscar <término>
Busca cualquier término en el código.

## ANÁLISIS DE FRAMEWORK

### Next.js
Busca en package.json y estructura:
- "next" en dependencias
- app/ (App Router) o pages/ (Pages Router)
- next.config.js

### React + Vite
Busca:
- "react", "vite" en dependencias
- vite.config.ts
- src/App.tsx

### Vue 2/3
Busca:
- "vue" en dependencias
- vue.config.js
- src/main.ts / src/main.js

### Svelte
Busca:
- "svelte" en dependencias
- svelte.config.js

## PATRONES DE ESTADO

### Zustand
```
store/*.ts
create((set) => ({
  ...
}))
```

### Redux
```
store/*.js
slices/
```

### Vuex
```
store/index.js
store/modules/
```

### Pinia
```
stores/*.ts
defineStore()
```

### Context API
```
contexts/
```

## PATRONES DE ESTILOS

### Tailwind
```
tailwind.config.js
classes="..."
postcss.config.js
```

### CSS Modules
```
*.module.css
*.module.scss
```

### Styled Components
```
styled-components
```

### Sass/SCSS
```
*.scss
*.sass
```

## PATRONES DE COMPONENTES

### Vue Options API
```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'MiComponente',
  props: { ... },
  data() { ... },
  methods: { ... }
}
</script>

<style scoped>
</style>
```

### React Functional
```jsx
function MiComponente({ prop }) {
  return <div>{prop}</div>;
}
```

### React with Hooks
```tsx
const MiComponente = ({ prop }) => {
  const [state, setState] = useState(null);
  return <div>{state}</div>;
};
```

## ANÁLISIS DE RUTAS

### React Router
```
react-router
useRoute
useRoutes
Routes
Route
```

### Vue Router
```
vue-router
this.$router
useRouter
```

### Next.js App Router
```
app/
page.tsx
layout.tsx
loading.tsx
error.tsx
```

### Next.js Pages Router
```
pages/
_app.tsx
getServerSideProps
getStaticProps
```

## INVESTIGACIÓN DE API

### Llamadas API
```
/buscar fetch
/buscar axios
/archivos services/
/archivos api/
```

### Estado de loading
```
/buscar loading
/buscar isLoading
/buscar isLoading
```

### Manejo de errores
```
/buscar error
/buscar catch
/buscar try
```

## CHECKLIST DE INVESTIGACIÓN

- [ ] Framework identificado
- [ ] Estado global localizado
- [ ] Routing identificado
- [ ] Estilos identificados
- [ ] UI Components encontrados
- [ ] API layer localizada
- [ ] Entry point encontrado
- [ ] Componentes clave encontrados

## ARCHIVOS COMUNES POR TIPO

### Next.js (App Router)
```
app/
├── page.tsx
├── layout.tsx
├── globals.css
├── api/
└── [slug]/
```

### Next.js (Pages Router)
```
pages/
├── _app.tsx
├── index.tsx
├── api/
└── [slug].tsx
```

### React + Vite
```
src/
├── main.tsx
├── App.tsx
├── components/
├── pages/
├── hooks/
├── services/
├── store/
└── styles/
```

### Vue 2/3
```
src/
├── main.ts
├── App.vue
├── router/
├── store/
├── components/
├── views/
└── assets/
```

## EJEMPLOS DE USO

### "¿Dónde está el login?"
```
/buscar auth
/buscar login
/buscar session
```

### "¿Cómo maneja estilos?"
```
/styles
/buscar .css
/buscar .scss
/buscar module
```

### "¿Qué API usa?"
```
/buscar fetch
/buscar axios
/buscar api/
```

### "¿Routing?"
```
/buscar Route
/buscar Router
/buscar Link
```

### "¿Estado global?"
```
/buscar store
/buscar context
/buscar createStore
```

## RUTAS CLAVE

### Entry Points
```
src/main.tsx
src/index.tsx
src/main.js
index.tsx
App.tsx
App.js
```

### Configuración
```
next.config.js
vite.config.ts
tsconfig.json
package.json
.env
```

### Estado
```
src/store/
src/stores/
src/context/
src/hooks/useStore.ts
```
