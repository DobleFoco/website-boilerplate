import * as theme_def from '../../assets/styles/themeColors';

export const Title = (props) => {
    const { text } = props;
    return (
        <>
            <h2 className='text-4xl px-4 py-2' style={{ color: theme_def.COLOR_FACE_MAIN }} >{ text }</h2>
        </>
    )
}
