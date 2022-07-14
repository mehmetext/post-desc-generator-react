import { useState } from "react";
import Description from "./components/Description";
import ExtraDescription from "./components/ExtraDescription";
import Hashtags from "./components/Hashtags";
import ReadySettings from "./components/ReadySettings";
import { extraDescriptionText } from "./data";
import "./css/style.css";

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
			<ReadySettings setForm={setForm} form={form} />
			<Description
				form={form}
				onChangeInput={onChangeInput}
				copyClipboard={copyClipboard}
			/>
			<Hashtags
				onChangeInput={onChangeInput}
				setForm={setForm}
				form={form}
			/>
			<ExtraDescription onChangeInput={onChangeInput} form={form} />
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
