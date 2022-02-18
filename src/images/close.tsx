type Props = {
  color: string;
  size?: number
}

export const CloseSvg = ({ color, size = 24 }: Props) => {
  return(
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.559099 0.559099C0.917199 0.201108 1.40282 0 1.90917 0C2.41553 0 2.90115 0.201108 3.25925 0.559099L10.0115 7.31138L16.7638 0.559099C17.124 0.211254 17.6063 0.0187787 18.107 0.0231296C18.6077 0.0274804 19.0866 0.228309 19.4407 0.582361C19.7947 0.936413 19.9956 1.41536 19.9999 1.91605C20.0043 2.41673 19.8118 2.8991 19.464 3.25925L12.7117 10.0115L19.464 16.7638C19.8118 17.124 20.0043 17.6063 19.9999 18.107C19.9956 18.6077 19.7947 19.0866 19.4407 19.4407C19.0866 19.7947 18.6077 19.9956 18.107 19.9999C17.6063 20.0043 17.124 19.8118 16.7638 19.464L10.0115 12.7117L3.25925 19.464C2.8991 19.8118 2.41673 20.0043 1.91605 19.9999C1.41536 19.9956 0.936413 19.7947 0.582361 19.4407C0.228309 19.0866 0.0274804 18.6077 0.0231296 18.107C0.0187787 17.6063 0.211254 17.124 0.559099 16.7638L7.31138 10.0115L0.559099 3.25925C0.201108 2.90115 0 2.41553 0 1.90917C0 1.40282 0.201108 0.917199 0.559099 0.559099V0.559099Z" fill={color}/>
    </svg>
  )
}
