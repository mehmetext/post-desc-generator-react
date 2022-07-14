import { readySettingMaps, extraDescriptionText } from "../data";
import { generateHashtagStr } from "../functions/generate_hashtag_str";

export default function ReadySettings({ setForm, form }) {
	const onClickReadySetting = (e) => {
		setForm({
			...form,
			description: e.description,
			hashtags: generateHashtagStr(e.tags),
			extraDescription: extraDescriptionText,
		});
	};

	return (
		<div className="readySettings">
			<div className="container">
				<div className="readySettings_title">HAZIR AYARLAR</div>
				<div className="readySettings_content">
					{readySettingMaps.map((element) => (
						<div
							key={element.id}
							className="readySettingItem"
							onClick={(e) => onClickReadySetting(element)}
						>
							{element.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
