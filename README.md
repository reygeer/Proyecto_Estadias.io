# API Proyect Inventario

Esta es una API REST creada con Node.js, Express y MySQL, lista para ser desplegada en [Render](https://render.com) usando una base de datos alojada en [Railway](https://railway.app).

## 🚀 Cómo desplegar en Render

1. Clona este repositorio o súbelo a tu cuenta:
   ```
   git clone https://github.com/reygeer/Proyect.github.io
   ```

2. Ingresa a [https://render.com](https://render.com) y crea una cuenta si no tienes una.

3. Crea un nuevo **Web Service** desde el botón **New +** y selecciona tu repositorio de GitHub.

4. Render detectará el archivo `render.yaml` automáticamente. Solo haz clic en "Create Web Service".

5. Espera unos minutos a que se construya tu proyecto. Luego obtendrás una URL pública como:

   ```
   https://proyect-inventario-api.onrender.com
   ```

## 📦 Endpoints disponibles

- `GET    /api/proveedores`
- `POST   /api/proveedores`
- `PUT    /api/proveedores/:id`
- `DELETE /api/proveedores/:id`

Igual para: `/clientes`, `/importaciones`, `/cotizaciones`.

## ⚙️ Variables de entorno

Estas se definen automáticamente desde el `render.yaml`:

- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

## 🧪 Ejecutar localmente

```bash
npm install
npm start
```
#   P r o y e c t o _ E s t a d i a s . i o  
 