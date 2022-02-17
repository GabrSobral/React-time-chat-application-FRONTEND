type Props = {
  color: string;
  size?: number
}

export const PinSVG = ({ color, size = 24 }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.742 0.083009C13.8406 0.082833 13.9382 0.102084 14.0293 0.139662C14.1204 0.177239 14.2032 0.232406 14.273 0.302009L21.698 7.72701C21.8386 7.86765 21.9176 8.05839 21.9176 8.25726C21.9176 8.45613 21.8386 8.64686 21.698 8.78751C20.978 9.50751 20.09 9.66951 19.4435 9.66951C19.178 9.66951 18.941 9.64251 18.7535 9.61101L14.0525 14.312C14.1763 14.8106 14.2566 15.319 14.2925 15.8315C14.3615 16.8845 14.2445 18.362 13.2125 19.394C13.0719 19.5346 12.8811 19.6136 12.6823 19.6136C12.4834 19.6136 12.2927 19.5346 12.152 19.394L7.90851 15.152L3.13551 19.925C2.84301 20.2175 1.30701 21.278 1.01451 20.9855C0.722007 20.693 1.78251 19.1555 2.07501 18.8645L6.84801 14.0915L2.60601 9.84801C2.4654 9.70736 2.38642 9.51663 2.38642 9.31776C2.38642 9.11889 2.4654 8.92815 2.60601 8.78751C3.63801 7.75551 5.11551 7.63701 6.16851 7.70751C6.68099 7.74342 7.1894 7.82372 7.68801 7.94751L12.389 3.24801C12.3498 3.01958 12.3297 2.78828 12.329 2.55651C12.329 1.91151 12.491 1.02351 13.2125 0.302009C13.3531 0.161806 13.5435 0.0830512 13.742 0.083009V0.083009Z" fill={color}/>
    </svg>
  )
}


