import ReactTextareaAutosize from "react-textarea-autosize";

export default function ExtraDescription({ onChangeInput, form }) {
	return (
		<div className="input-group">
			<div className="container">
				<h2>Ek Açıklama</h2>
				<ReactTextareaAutosize
					name="extraDescription"
					id="extraDescription"
					className="input_textarea"
					minRows={2}
					onChange={onChangeInput}
					value={form.extraDescription}
				/>
			</div>
		</div>
	);
}
