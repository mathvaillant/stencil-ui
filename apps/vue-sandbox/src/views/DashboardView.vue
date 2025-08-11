<template>
	<ui-xstack style="padding: 20px; width: 100%">
		<ui-ystack style="width: 100%; gap: 20px">
			<ui-typography>Dashboard Page</ui-typography>

			<ui-tab-context value="table">
				<ui-tab-list>
					<ui-tab label="Table" value="table" />
					<ui-tab label="Form" value="form" />
				</ui-tab-list>

				<ui-tab-panel value="table">
					<ui-xstack style="padding-block: 20px; width: 100%">
						<ui-table
							style="width: 100%; max-height: 80vh"
							sticky-header
							:columns="tableColumns"
							:rows="tableRows"
						/>
					</ui-xstack>
				</ui-tab-panel>

				<ui-tab-panel value="form">
					<ui-xstack style="padding-block: 20px; width: 100%">
						<form
							ref="formRef"
							@submit.prevent="submitForm"
							style="
								display: flex;
								flex-direction: column;
								gap: 16px;
								width: 100%;
							"
						>
							<ui-ystack>
								<ui-label htmlFor="012">Cover Letter</ui-label>
								<ui-textarea
									required
									fieldId="012"
									name="cover-letter"
									placeholder="Write about yourself..."
									:maxlength="500"
									:minlength="50"
									rows="5"
								/>
							</ui-ystack>

							<ui-ystack>
								<ui-label htmlFor="123">Name</ui-label>
								<ui-input
									required
									fieldId="123"
									name="name"
									type="text"
									autocomplete="name"
									placeholder="Enter your name"
								/>
							</ui-ystack>

							<ui-ystack>
								<ui-label htmlFor="456">Email</ui-label>
								<ui-input
									required
									fieldId="456"
									name="email"
									type="email"
									autocomplete="email"
									placeholder="Enter your email"
								/>
							</ui-ystack>

							<ui-ystack>
								<ui-label htmlFor="567">Birthday</ui-label>
								<ui-input
									required
									fieldId="567"
									name="birthday"
									type="date"
									placeholder="Enter your birthday"
								/>
							</ui-ystack>

							<ui-ystack>
								<ui-label htmlFor="678">Stack</ui-label>
								<ui-select fieldId="678" name="stack">
									<option value="frontend">Frontend</option>
									<option value="backend">Backend</option>
									<option value="fullstack">Fullstack</option>
								</ui-select>
							</ui-ystack>

							<ui-fieldset>
								<ui-label as="legend"
									>I agree to the terms and
									conditions</ui-label
								>
								<ui-fieldset-option
									type="radio"
									name="terms"
									label="Yes"
									value="agree"
								/>
								<ui-fieldset-option
									type="radio"
									name="terms"
									label="No"
									value="disagree"
								/>
							</ui-fieldset>

							<ui-fieldset>
								<ui-label as="legend">Languages</ui-label>
								<ui-fieldset-option
									type="checkbox"
									name="can-speak-english"
									label="English"
									value="english"
								/>
								<ui-fieldset-option
									type="checkbox"
									name="can-speak-spanish"
									label="Spanish"
									value="spanish"
								/>
								<ui-fieldset-option
									type="checkbox"
									name="can-speak-french"
									label="French"
									value="french"
								/>
							</ui-fieldset>

							<ui-xstack style="justify-content: end; gap: 8px">
								<ui-button variant="tertiary" type="reset"
									>Reset</ui-button
								>
								<ui-button type="submit">Submit</ui-button>
							</ui-xstack>
						</form>
					</ui-xstack>
				</ui-tab-panel>
			</ui-tab-context>
		</ui-ystack>
	</ui-xstack>

	<ui-modal
		:open="!!formData"
		header-title="Form Data"
		@close="closeModal"
		footer-slot-name="footer-slot"
	>
		<ui-xstack style="padding: 20px" v-if="formData">
			<ui-ystack style="gap: 20px">
				<ui-typography variant="h5"
					>Cover Letter: {{ formData["cover-letter"] }}</ui-typography
				>
				<ui-typography variant="h5"
					>Name: {{ formData.name }}</ui-typography
				>
				<ui-typography variant="h5"
					>Email: {{ formData.email }}</ui-typography
				>
				<ui-typography variant="h5"
					>Birthday: {{ formData.birthday }}</ui-typography
				>
				<ui-typography variant="h5"
					>Stack: {{ formData.stack }}</ui-typography
				>
				<ui-typography variant="h5"
					>Terms: {{ formData.terms }}</ui-typography
				>
				<ui-typography variant="h5" style="text-transform: capitalize">
					Languages: {{ selectedLanguages }}
				</ui-typography>
			</ui-ystack>
		</ui-xstack>

		<ui-xstack
			slot="footer-slot"
			style="justify-content: end; padding: 10px"
		>
			<ui-button variant="secondary" @click="closeModal">Close</ui-button>
			<ui-button @click="finalSubmit">Submit</ui-button>
		</ui-xstack>
	</ui-modal>
</template>

<script>
export default {
	data() {
		return {
			tab: "table",
			formData: null,
			tableColumns: [
				{ label: "Name", align: "left" },
				{ label: "Email", align: "left" },
				{ label: "Status", align: "center" },
				{ label: "Actions", align: "center" },
				{ label: "Input", align: "right" },
				{ label: "Link", align: "right" },
				{ label: "Delete", align: "right" },
			],
			tableRows: [
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
						onChange: (val) => console.log("Alice status changed to", val),
					},
					{
						type: "button",
						text: "Edit",
						onClick: () => alert("Edit Alice"),
					},
					{
						type: "input",
						inputType: "text",
						value: "Alice input",
						placeholder: "Edit...",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Alice"),
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
							console.log("Bob status changed to", val),
					},
					{
						type: "button",
						text: "Delete",
						onClick: () => alert("Delete Bob"),
					},
					{
						type: "input",
						inputType: "email",
						value: "",
						placeholder: "bob@domain.com",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Bob"),
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
							console.log("Charlie status changed to", val),
					},
					{
						type: "button",
						text: "Ban",
						onClick: () => alert("Ban Charlie"),
					},
					{
						type: "input",
						inputType: "password",
						value: "",
						placeholder: "Enter password",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Charlie"),
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
							console.log("Diana status changed to", val),
					},
					{
						type: "button",
						text: "Promote",
						onClick: () => alert("Promote Diana"),
					},
					{
						type: "input",
						inputType: "search",
						value: "",
						placeholder: "Search...",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Diana"),
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
							console.log("Eve status changed to", val),
					},
					{
						type: "button",
						text: "Warn",
						onClick: () => alert("Warn Eve"),
					},
					{
						type: "input",
						inputType: "number",
						value: "123",
						placeholder: "Enter ID",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Eve"),
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
							console.log("Frank status changed to", val),
					},
					{
						type: "button",
						text: "Suspend",
						onClick: () => alert("Suspend Frank"),
					},
					{
						type: "input",
						inputType: "url",
						value: "",
						placeholder: "Enter URL",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Frank"),
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
							console.log("Alice status changed to", val),
					},
					{
						type: "button",
						text: "Edit",
						onClick: () => alert("Edit Alice"),
					},
					{
						type: "input",
						inputType: "text",
						value: "Alice input",
						placeholder: "Edit...",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Alice"),
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
							console.log("Bob status changed to", val),
					},
					{
						type: "button",
						text: "Delete",
						onClick: () => alert("Delete Bob"),
					},
					{
						type: "input",
						inputType: "email",
						value: "",
						placeholder: "bob@domain.com",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Bob"),
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
							console.log("Charlie status changed to", val),
					},
					{
						type: "button",
						text: "Ban",
						onClick: () => alert("Ban Charlie"),
					},
					{
						type: "input",
						inputType: "password",
						value: "",
						placeholder: "Enter password",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Charlie"),
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
							console.log("Diana status changed to", val),
					},
					{
						type: "button",
						text: "Promote",
						onClick: () => alert("Promote Diana"),
					},
					{
						type: "input",
						inputType: "search",
						value: "",
						placeholder: "Search...",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Diana"),
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
							console.log("Eve status changed to", val),
					},
					{
						type: "button",
						text: "Warn",
						onClick: () => alert("Warn Eve"),
					},
					{
						type: "input",
						inputType: "number",
						value: "123",
						placeholder: "Enter ID",
						onInput: (e) =>
							console.log("Input changed:", e.target.value),
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
						onClick: () => alert("Delete Eve"),
					},
				],
			],
		};
	},
	computed: {
		selectedLanguages() {
			if (!this.formData) return "";
			return [
				this.formData["can-speak-english"],
				this.formData["can-speak-spanish"],
				this.formData["can-speak-french"],
			]
				.filter(Boolean)
				.join(", ");
		},
	},
	methods: {
		submitForm() {
			const form = this.$refs.formRef;
			const formValues = Object.fromEntries(new FormData(form).entries());
			this.formData = formValues;
		},
		closeModal() {
			this.formData = null;
		},
		finalSubmit() {
			alert("Form submitted!");
			this.formData = null;
			this.$refs.formRef.reset();
		},
	},
};
</script>
