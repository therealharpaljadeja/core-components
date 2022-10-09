<center>core-components</center>
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
