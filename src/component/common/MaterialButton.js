import {Typography} from "@mui/material";

export const MaterialButton = ({name, icon, isSelected, onClick, color}) => {
    return (
        <div onClick={onClick} style={{
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer'
        }}>
            <div className='circle_container' style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className={`${isSelected ? 'border' : ''} circle`} style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundImage: `${icon ? `url(${icon})` : ''}`,
                    backgroundColor: `${color ? color : ''}`,
                    display: 'flex',
                    border: `${isSelected ? '4px solid #ff99ff' : 'none'}`,
                    boxShadow: `${isSelected ? '#cc52ff 0px 0px 14px inset' : 'none'}`,
                }}>
                </div>
            </div>
            <Typography style={{textAlign: 'center'}} variant="h7">{name}</Typography>
        </div>
    );
}