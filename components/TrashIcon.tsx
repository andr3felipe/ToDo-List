import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export function TrashIcon() {
  return (
    <div>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
        <stop offset={0} stopColor="#7F00FF" />
        <stop offset={1} stopColor="#E100FF" />
      </linearGradient>
    </svg>
    <DeleteForeverOutlinedIcon fontSize='large' sx={{ fill: "url(#linearColors)" }} />
  </div>
  )
}