import { UiTypography, UiYstack } from "stencil-ui-react-library";

export default function HomePage() {
	return (
		<UiYstack style={{ padding: "20px" }}>
			<UiTypography>React Sandbox</UiTypography>

			<UiTypography variant="p">
				Welcome to the React Sandbox! This is a playground for testing
				and experimenting with various components and features.
			</UiTypography>
		</UiYstack>
	);
}
