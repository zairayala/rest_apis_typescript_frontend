# 🌿 Botánica Viva - Sistema de Gestión y Catálogo de Productos

**Botánica Viva** es una aplicación web full stack desarrollada con el stack **PERN** (PostgreSQL, Express, React, Node.js). Está diseñada para negocios que buscan gestionar productos fácilmente desde un panel de administración, y mostrar un catálogo limpio y funcional para sus clientes.

---

## 📸 Capturas

### 🔐 Login (Autenticación Interna)

![image](https://github.com/user-attachments/assets/446e3722-c5a7-4f50-8728-a2f888653f02)

> Acceso protegido con credenciales internas para el administrador.

---

### 📦 Panel de Administración

#### ✅ Listado de productos

![image](https://github.com/user-attachments/assets/d2340bb3-c728-49cd-a026-014e751cd1d6)

> Visualiza todos los productos con nombre, precio, disponibilidad y acciones rápidas.

#### ➕ Crear producto

![image](https://github.com/user-attachments/assets/b43b8e69-2aae-41a1-9ca5-1c261ed74d4f)

> Añade nuevos productos al sistema con facilidad.

#### ✏️ Editar producto

![image](https://github.com/user-attachments/assets/f9d31622-d1b2-4789-8000-d317c319cdfc)

> Modifica los datos de un producto existente.

---

### 🌼 Catálogo para Clientes

![image](https://github.com/user-attachments/assets/4a627dfc-4fe0-4671-a719-449c0c56a632)

> Interfaz pública donde los clientes pueden consultar precios y disponibilidad de los productos.

---

## ⚙️ Tecnologías utilizadas

### Frontend
- ⚛️ **React**
- 🧭 **React Router DOM**
- 💨 **TailwindCSS**
- 🍪 **LocalStorage** para autenticación

### Backend
- 🟢 **Node.js**
- 🚂 **Express**
- 🐘 **PostgreSQL**

---

## 🔐 Autenticación

- Login simple sin JWT (por ahora), validación contra datos internos.
- Protección de rutas con React Router y `useEffect`.
- Redirección automática según autenticación.

---

## ✨ Funcionalidades

### Administrador
- Iniciar sesión
- Ver productos
- Crear nuevo producto
- Editar producto
- Eliminar producto
- Cambiar disponibilidad
- Cerrar sesión

### Cliente
- Ver catálogo con nombre, precio (en **soles**) y disponibilidad
- Acceso público sin autenticación

