import { BeatLoader } from "react-spinners";
import s from './Loading.module.css'
const Loading = () => {
    return (
        <BeatLoader color="#66FFCC" className={s.loader} />
    )
}
export default Loading;