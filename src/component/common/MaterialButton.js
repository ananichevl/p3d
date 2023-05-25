import {Typography} from "@mui/material";

export const MaterialButton = ({name, icon, isSelected, onClick, color}) => {
    return (
        <div onClick={onClick} style={{
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            alignItems: 'center'
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
                    boxShadow: '#999999 0 1px 5px 1px',

                }}>
                </div>
            </div>
            <Typography style={{textAlign: 'center'}} variant="h8">{name}</Typography>
        </div>
    );
}