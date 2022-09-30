import { ComponentStory } from "@storybook/react";
import { FiUser } from "react-icons/fi";
import Select from "./Select";
import SelectItem from "./SelectItem";

export default {
    title: "Components/Select",
    component: Select,
};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook", disabled: true },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
];

export const selectWithHint = Template.bind({});
selectWithHint.args = {
    label: "Team Member",
    name: "team-member",
    hint: "This is hint text to help user",
    children: people.map((p) => (
        <SelectItem
            name={p.name}
            key={p.name}
            value={p}
            disabled={p.disabled}
        />
    )),
    data: people,
};
