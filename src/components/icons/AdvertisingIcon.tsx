const AdvertisingIcon = ({
  className
}: {
  className?: string
}) => (
  <svg className={className} display='block'>
    <path d="M29.714 40H27.43V23.314c0-.228.228-.457.457-.457h1.371c.229 0 .457.229.457.457V40Z" style={{ fill: 'var(--primary-color)' }}></path>
    <path d="M14.286 18.171 9.37 13.257c-.228-.228-.457-.228-.685 0l-1.829 1.829c-.228.228-.228.457 0 .685l6.972 6.972c.228.228.457.228.685 0L25.486 11.77c.228-.228.228-.457 0-.685l-1.829-1.829c-.228-.228-.457-.228-.686 0l-8.685 8.914Z" style={{ fill: 'var(--accent-color)' }}></path>
    <path d="M49.143 20.8V10.286c0-.343-.343-.572-.572-.457L27.771 16c-.228.114-.342.229-.342.457v2.629c0 .343.343.571.571.457l17.714-5.257V44L28.23 38.857h-11.2A1.024 1.024 0 0 1 16 37.83v-9.943a.492.492 0 0 0-.457-.457h-2.514a.492.492 0 0 0-.457.457v9.943c0 2.514 1.942 4.457 4.457 4.457h1.714l3.314 12.228c0 .229.229.343.457.343h10.629c.343 0 .571-.343.457-.571l-3.086-11.2 18.058 5.371c.342.114.571-.114.571-.457V37.6C53.029 36.8 56 33.371 56 29.257S53.03 21.6 49.143 20.8ZM24.686 51.429l-2.514-9.143h4.457l2.514 9.143h-4.457Zm24.457-17.372v-9.714c1.943.686 3.428 2.628 3.428 4.8 0 2.171-1.485 4.114-3.428 4.914Z" style={{ fill: 'var(--primary-color)' }}></path>
  </svg>
)

export default AdvertisingIcon;