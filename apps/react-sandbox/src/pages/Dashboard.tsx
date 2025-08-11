import { useRef, useState } from "react";
import {
	UiButton,
	UiFieldset,
	UiFieldsetOption,
	UiInput,
	UiLabel,
	UiModal,
	UiSelect,
	UiTab,
	UiTabContext,
	UiTable,
	UiTabList,
	UiTabPanel,
	UiTextarea,
	UiTypography,
	UiXstack,
	UiYstack,
} from "stencil-ui-react-library";

export default function DashboardPage() {
	const formRef = useRef<HTMLFormElement>(null);
	const [formData, setFormData] = useState<{
		name?: string;
		email?: string;
		birthday?: string;
		stack?: string;
		terms?: string;
		"cover-letter": string;
		"can-speak-english"?: string;
		"can-speak-spanish"?: string;
		"can-speak-french"?: string;
	} | null>(null);

	return (
		<>
			<UiXstack style={{ padding: "20px", width: "100%" }}>
				<UiYstack style={{ width: "100%", gap: "20px" }}>
					<UiTypography>Dashboard Page</UiTypography>

					<UiTabContext value="table">
						<UiTabList>
							<UiTab label="Table" value="table" />
							<UiTab label="Form" value="form" />
						</UiTabList>
						<UiTabPanel value="table">
							<UiXstack
								style={{ paddingBlock: "20px", width: "100%" }}
							>
								<UiTable
									style={{ width: "100%", maxHeight: "80vh" }}
									stickyHeader
									columns={[
										{ label: "Name", align: "left" },
										{ label: "Email", align: "left" },
										{ label: "Status", align: "center" },
										{ label: "Actions", align: "center" },
										{ label: "Input", align: "right" },
										{ label: "Link", align: "right" },
										{ label: "Delete", align: "right" },
									]}
									rows={[
										[
											{
												type: "typography",
												variant: "p",
												text: "Alice",
											},
											{
												type: "typography",
												variant: "p",
												text: "alice@example.com",
											},
											{
												type: "select",
												selectedValue: "active",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "pending",
														label: "Pending",
													},
												],
												onChange: (val) =>
													console.log(
														"Alice status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Edit",
												onClick: () =>
													alert("Edit Alice"),
											},
											{
												type: "input",
												inputType: "text",
												value: "Alice input",
												placeholder: "Edit...",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Profile",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Alice"),
											},
										],
										[
											{
												type: "typography",
												variant: "p",
												text: "Bob",
											},
											{
												type: "typography",
												variant: "p",
												text: "bob@example.com",
											},
											{
												type: "select",
												selectedValue: "inactive",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "pending",
														label: "Pending",
													},
												],
												onChange: (val) =>
													console.log(
														"Bob status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Delete",
												onClick: () =>
													alert("Delete Bob"),
											},
											{
												type: "input",
												inputType: "email",
												value: "",
												placeholder: "bob@domain.com",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Details",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Bob"),
											},
										],
										[
											{
												type: "typography",
												variant: "p",
												text: "Charlie",
											},
											{
												type: "typography",
												variant: "p",
												text: "charlie@example.com",
											},
											{
												type: "select",
												selectedValue: "pending",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "pending",
														label: "Pending",
													},
												],
												onChange: (val) =>
													console.log(
														"Charlie status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Ban",
												onClick: () =>
													alert("Ban Charlie"),
											},
											{
												type: "input",
												inputType: "password",
												value: "",
												placeholder: "Enter password",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Visit",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Charlie"),
											},
										],
										[
											{
												type: "typography",
												variant: "subtitle",
												text: "Diana",
											},
											{
												type: "typography",
												variant: "caption",
												text: "diana@example.com",
											},
											{
												type: "select",
												name: "status-diana",
												selectedValue: "active",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
												],
												onChange: (val) =>
													console.log(
														"Diana status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Promote",
												onClick: () =>
													alert("Promote Diana"),
											},
											{
												type: "input",
												inputType: "search",
												value: "",
												placeholder: "Search...",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Reports",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Diana"),
											},
										],
										[
											{
												type: "typography",
												variant: "p",
												text: "Eve",
											},
											{
												type: "typography",
												variant: "p",
												text: "eve@example.com",
											},
											{
												type: "select",
												name: "status-eve",
												selectedValue: "inactive",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "banned",
														label: "Banned",
													},
												],
												onChange: (val) =>
													console.log(
														"Eve status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Warn",
												onClick: () =>
													alert("Warn Eve"),
											},
											{
												type: "input",
												inputType: "number",
												value: "123",
												placeholder: "Enter ID",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Audit Log",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Eve"),
											},
										],
										[
											{
												type: "typography",
												variant: "title",
												text: "Frank",
											},
											{
												type: "typography",
												variant: "p",
												text: "frank@example.com",
											},
											{
												type: "select",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
												],
												onChange: (val) =>
													console.log(
														"Frank status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Suspend",
												onClick: () =>
													alert("Suspend Frank"),
											},
											{
												type: "input",
												inputType: "url",
												value: "",
												placeholder: "Enter URL",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Website",
												href: "https://example.com",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Frank"),
											},
										],
										[
											{
												type: "typography",
												variant: "p",
												text: "Alice",
											},
											{
												type: "typography",
												variant: "p",
												text: "alice@example.com",
											},
											{
												type: "select",
												name: "status-alice",
												selectedValue: "active",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "pending",
														label: "Pending",
													},
												],
												onChange: (val) =>
													console.log(
														"Alice status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Edit",
												onClick: () =>
													alert("Edit Alice"),
											},
											{
												type: "input",
												inputType: "text",
												value: "Alice input",
												placeholder: "Edit...",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Profile",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Alice"),
											},
										],
										[
											{
												type: "typography",
												variant: "p",
												text: "Bob",
											},
											{
												type: "typography",
												variant: "p",
												text: "bob@example.com",
											},
											{
												type: "select",
												name: "status-bob",
												selectedValue: "inactive",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "pending",
														label: "Pending",
													},
												],
												onChange: (val) =>
													console.log(
														"Bob status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Delete",
												onClick: () =>
													alert("Delete Bob"),
											},
											{
												type: "input",
												inputType: "email",
												value: "",
												placeholder: "bob@domain.com",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Details",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Bob"),
											},
										],
										[
											{
												type: "typography",
												variant: "p",
												text: "Charlie",
											},
											{
												type: "typography",
												variant: "p",
												text: "charlie@example.com",
											},
											{
												type: "select",
												name: "status-charlie",
												selectedValue: "pending",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "pending",
														label: "Pending",
													},
												],
												onChange: (val) =>
													console.log(
														"Charlie status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Ban",
												onClick: () =>
													alert("Ban Charlie"),
											},
											{
												type: "input",
												inputType: "password",
												value: "",
												placeholder: "Enter password",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Visit",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Charlie"),
											},
										],
										[
											{
												type: "typography",
												variant: "subtitle",
												text: "Diana",
											},
											{
												type: "typography",
												variant: "caption",
												text: "diana@example.com",
											},
											{
												type: "select",
												name: "status-diana",
												selectedValue: "active",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
												],
												onChange: (val) =>
													console.log(
														"Diana status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Promote",
												onClick: () =>
													alert("Promote Diana"),
											},
											{
												type: "input",
												inputType: "search",
												value: "",
												placeholder: "Search...",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Reports",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Diana"),
											},
										],
										[
											{
												type: "typography",
												variant: "p",
												text: "Eve",
											},
											{
												type: "typography",
												variant: "p",
												text: "eve@example.com",
											},
											{
												type: "select",
												name: "status-eve",
												selectedValue: "inactive",
												options: [
													{
														value: "active",
														label: "Active",
													},
													{
														value: "inactive",
														label: "Inactive",
													},
													{
														value: "banned",
														label: "Banned",
													},
												],
												onChange: (val) =>
													console.log(
														"Eve status changed to",
														val
													),
											},
											{
												type: "button",
												text: "Warn",
												onClick: () =>
													alert("Warn Eve"),
											},
											{
												type: "input",
												inputType: "number",
												value: "123",
												placeholder: "Enter ID",
												onInput: (e) =>
													console.log(
														"Input changed:",
														e.target.value
													),
											},
											{
												type: "link",
												text: "Audit Log",
												href: "#",
											},
											{
												type: "button",
												text: "",
												variant: "secondary",
												iconName: "delete",
												onClick: () =>
													alert("Delete Eve"),
											},
										],
									]}
								/>
							</UiXstack>
						</UiTabPanel>
						<UiTabPanel value="form">
							<UiXstack
								style={{ paddingBlock: "20px", width: "100%" }}
							>
								<form
									ref={formRef}
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "16px",
										width: "100%",
									}}
									onSubmit={(event) => {
										event.preventDefault();
										const formData = new FormData(
											event.target as HTMLFormElement
										);
										const data = Object.fromEntries(
											formData.entries()
										);
										setFormData(data);
									}}
								>
									<UiYstack>
										<UiLabel html-for="012" as="label">
											Cover Letter
										</UiLabel>
										<UiTextarea
											required
											field-id="012"
											name="cover-letter"
											placeholder="Write about yourself..."
											maxlength={500}
											minlength={50}
											rows={5}
										></UiTextarea>
									</UiYstack>

									<UiYstack>
										<UiLabel html-for="123" as="label">
											Name
										</UiLabel>
										<UiInput
											required
											field-id="123"
											name="name"
											type="text"
											autocomplete="name"
											placeholder="Enter your name"
										></UiInput>
									</UiYstack>

									<UiYstack>
										<UiLabel html-for="456" as="label">
											Email
										</UiLabel>
										<UiInput
											required
											field-id="456"
											name="email"
											type="email"
											autocomplete="email"
											placeholder="Enter your email"
										></UiInput>
									</UiYstack>

									<UiYstack>
										<UiLabel html-for="567" as="label">
											Birthday
										</UiLabel>
										<UiInput
											required
											field-id="567"
											name="birthday"
											type="date"
											placeholder="Enter your birthday"
										></UiInput>
									</UiYstack>

									<UiYstack>
										<UiLabel html-for="678" as="label">
											Stack
										</UiLabel>
										<UiSelect field-id="678" name="stack">
											<option value="frontend">
												Frontend
											</option>
											<option value="backend">
												Backend
											</option>
											<option value="fullstack">
												Fullstack
											</option>
										</UiSelect>
									</UiYstack>

									<UiFieldset>
										<UiLabel as="legend">
											I agree to the terms and conditions
										</UiLabel>

										<UiFieldsetOption
											type="radio"
											name="terms"
											label="Yes"
											value="agree"
										></UiFieldsetOption>

										<UiFieldsetOption
											type="radio"
											name="terms"
											label="No"
											value="disagree"
										></UiFieldsetOption>
									</UiFieldset>

									<UiFieldset>
										<UiLabel as="legend">Languages</UiLabel>

										<UiFieldsetOption
											type="checkbox"
											name="can-speak-english"
											label="English"
											value="english"
										></UiFieldsetOption>

										<UiFieldsetOption
											type="checkbox"
											name="can-speak-spanish"
											label="Spanish"
											value="spanish"
										></UiFieldsetOption>

										<UiFieldsetOption
											type="checkbox"
											name="can-speak-french"
											label="French"
											value="french"
										></UiFieldsetOption>
									</UiFieldset>

									<UiXstack
										style={{
											justifyContent: "end",
											gap: "8px",
										}}
									>
										<UiButton
											variant="tertiary"
											type="reset"
										>
											Reset
										</UiButton>
										<UiButton type="submit">
											Submit
										</UiButton>
									</UiXstack>
								</form>
							</UiXstack>
						</UiTabPanel>
					</UiTabContext>
				</UiYstack>
			</UiXstack>

			<UiModal
				open={Boolean(formData)}
				header-title="Form Data"
				onClose={() => setFormData(null)}
				footer-slot-name="footer-slot"
			>
				<UiXstack style={{ padding: "20px" }}>
					{formData && (
						<UiYstack style={{ gap: "20px" }}>
							<UiTypography variant="h5">
								Cover Letter: {formData["cover-letter"]}
							</UiTypography>
							<UiTypography variant="h5">
								Name: {formData.name}
							</UiTypography>
							<UiTypography variant="h5">
								Email: {formData.email}
							</UiTypography>
							<UiTypography variant="h5">
								Birthday: {formData.birthday}
							</UiTypography>
							<UiTypography variant="h5">
								Stack: {formData.stack}
							</UiTypography>
							<UiTypography variant="h5">
								Terms: {formData.terms}
							</UiTypography>
							<UiTypography
								variant="h5"
								style={{ textTransform: "capitalize" }}
							>
								Languages:{" "}
								{[
									formData["can-speak-english"],
									formData["can-speak-spanish"],
									formData["can-speak-french"],
								]
									.filter(Boolean)
									.join(", ")}
							</UiTypography>
						</UiYstack>
					)}
				</UiXstack>
				<UiXstack
					slot="footer-slot"
					style={{ justifyContent: "end", padding: "10px" }}
				>
					<UiButton
						variant="secondary"
						onClick={() => setFormData(null)}
					>
						Close
					</UiButton>

					<UiButton
						onClick={() => {
							alert("Form submitted!");
							setFormData(null);
							formRef.current?.reset();
						}}
					>
						Submit
					</UiButton>
				</UiXstack>
			</UiModal>
		</>
	);
}
