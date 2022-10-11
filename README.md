<center>core-components</center><br>
<center><i>Reusable components for personal projects</i></center>

### Component

#### Alert

```ts
<Alert
    variant={AlertVariants.Primary}
    alertIcon={Playground.args?.alertIcon}
    children={Playground.args?.children}
    closeable={false}
/>
```

#### Badge

```ts
<Badge label="Badge" variant={BadgeVariant.Primary} invertColorScheme={false} />
```

#### BadgeGroup

```ts
<BadgeGroup
    badgeMessage="Primary Badge Group"
    variant={BadgeVariant.Primary}
    icon={<AiOutlineArrowRight />}
/>
```

#### Button

```ts
<Button label="Button" destructive={true} variant={ButtonVariant.Primary} />
```

#### ButtonGroup

```ts
<ButtonGroup
    firstButtonConfig={{
        label: "Prev",
        leftIcon: <AiOutlineArrowLeft />,
    }}
    lastButtonConfig={{
        label: "Next",
        rightIcon: <AiOutlineArrowRight />,
    }}
    buttonsConfig={[...Array(10).keys()].map((i) => {
        return { label: (i + 1).toString() };
    })}
    buttonsInMiddle={10}
    current={5}
/>
```

### RadioGroup

```ts
const values = [
    {
        name: "Basic Plan $10/month",
        value: "basic-plan",
        description:
            "Includes up to 10 users, 20GB individual data and access to all features.",
    },
    {
        name: "Business Plan $50/month",
        value: "business-plan",
        description:
            "Includes up to 50 users, 512GB individual data and access to all features.",
    },
];

<Radio values-{values} label="CPU Plans" name="cpu-plan" disabled={true} />
```
