import ReactTextareaAutosize from "react-textarea-autosize";

export default function Description({ onChangeInput, form, copyClipboard }) {
	return (
		<div className="input-group">
			<div className="container">
				<h2>Açıklama</h2>
				<ReactTextareaAutosize
					name="description"
					id="description"
					className="input_textarea"
					minRows={2}
					value={form.description}
					onChange={onChangeInput}
				/>
				<div onClick={copyClipboard} className="copy-small">
					KOPYALA
				</div>
			</div>
		</div>
	);
}
