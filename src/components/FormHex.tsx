import { FormHexProps } from "./types/FormHexProps";

export default function FormHex({converter}: FormHexProps) {
    return (
        <form className="enter_hex-color">
          <div className="input_wrapper">
            <input
                type="text"
                maxLength={7}
                placeholder="HEX, #..."
                className="input_hex"
                onChange={converter}
            />
          </div>
        </form>
    )
}