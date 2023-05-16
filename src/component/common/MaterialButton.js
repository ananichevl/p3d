export const MaterialButton = ({name, icon, isSelected, onClick, color}) => {
    return (
        <div onClick={onClick} style={{
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer'
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundImage: `${icon ? `url(${icon})` : ''}`,
                    backgroundColor: `${color ? color : ''}`,
                    display: 'flex',
                    border: `${isSelected ? '5px solid black' : 'none'}`,
                }}>
                </div>
            </div>
            <h2>{name}</h2>
        </div>
    );
}