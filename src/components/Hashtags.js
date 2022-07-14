import { hashtagMaps } from "../data";
import { generateHashtagStr } from "../functions/generate_hashtag_str";
import ReactTextareaAutosize from "react-textarea-autosize";

export default function Hashtags({ onChangeInput, setForm, form }) {
	const onClickHashtagGroup = (e) => {
		setForm({
			...form,
			hashtags: generateHashtagStr(e.tags),
		});
	};

	return (
		<div className="input-group">
			<div className="container">
				<h2>Etiketler</h2>
				<div className="hashtags">
					{hashtagMaps.map((element) => (
						<div
							key={element.id}
							className="hashtagItem"
							onClick={() => onClickHashtagGroup(element)}
						>
							{element.name}
						</div>
					))}
				</div>
				<ReactTextareaAutosize
					name="hashtags"
					id="hashtags"
					className="input_textarea"
					minRows={2}
					onChange={onChangeInput}
					value={form.hashtags}
				/>
			</div>
		</div>
	);
}
