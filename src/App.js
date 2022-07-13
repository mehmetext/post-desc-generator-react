import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import "./css/style.css";
import { hashtagMaps, readySettingMaps, extraDescriptionText } from "./data";

function App() {
	const [form, setForm] = useState({
		extraDescription: extraDescriptionText,
		hashtags: "",
		description: "",
	});
	const [showingPopup, setShowingPopup] = useState(false);

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const onClickReadySetting = (e) => {
		setForm({
			...form,
			description: e.description,
			hashtags: generateHashtagStr(e.tags),
			extraDescription: extraDescriptionText,
		});
	};

	const onClickHashtagGroup = (e) => {
		setForm({
			...form,
			hashtags: generateHashtagStr(e.tags),
		});
	};

	const generateHashtagStr = (oldTags) => {
		let tags = [...oldTags];
		let mixed = [];

		tags.forEach((e) => {
			let index = Math.floor(Math.random() * tags.length);
			mixed = [...mixed, tags[index]];
			tags = tags.filter((tag) => tag !== tags[index]);
		});

		let tagsStr = "#" + mixed[0];

		for (let i = 0; i < mixed.length; i++) {
			tagsStr += ", #" + mixed[i];
		}

		return tagsStr;
	};

	const copyClipboard = async (e) => {
		console.log("kopyalandı");
		let copying = form.description + form.extraDescription + form.hashtags;
		await navigator.clipboard.writeText(copying);

		setShowingPopup(true);
		setTimeout(() => {
			setShowingPopup(false);
		}, 1000);
	};

	return (
		<>
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
			<div className="copy" onClick={copyClipboard}>
				KOPYALA
			</div>
			<div className={"copied-popup " + (showingPopup ? "show" : "")}>
				<h3>KOPYALANDI</h3>
			</div>
			<div style={{ height: "8rem" }}></div>
		</>
	);
}

export default App;
