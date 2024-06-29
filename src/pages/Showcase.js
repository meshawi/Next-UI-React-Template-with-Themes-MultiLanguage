import React from "react";
import {
  Button,
  Avatar,
  Badge,
  Input,
  Checkbox,
  Chip,
  Tooltip,
  Progress,
  Switch,
  Textarea,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Showcase = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6  p-6 rounded-lg shadow-md">
      <Button color="primary" className="w-full">
        {t("clickMe")}
      </Button>
      <div className="flex items-center gap-2">
        <Avatar squared text="A" />
        <Badge color="error">New</Badge>
      </div>
      <Card className="py-4  shadow-md">
        <CardHeader className="pb-0 pt-4 px-6 flex flex-col items-start">
          <p className="text-xs uppercase font-bold">Daily Mix</p>
          <small className="text-gray-400">12 Tracks</small>
          <h4 className="font-bold text-lg">{t("welcome")}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 px-4">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
      <Input clearable labelPlaceholder="Enter text..." className="w-full" />
      <Textarea placeholder="Type your message..." className="w-full" />
      <Checkbox>Agree to terms</Checkbox>
      <Switch checked={true}>Toggle Switch</Switch>
      <div className="flex gap-2">
        <Chip color="primary">React</Chip>
        <Chip color="success">Next UI</Chip>
      </div>
      <Tooltip content="This is a tooltip">
        <Button auto flat>
          Hover me
        </Button>
      </Tooltip>
      <Progress value={50} className="w-full" />
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="w-full">
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          items={[
            { key: "new", label: t("newFile") },
            { key: "copy", label: t("copyLink") },
            { key: "edit", label: t("editFile") },
            { key: "delete", label: t("deleteFile") },
          ]}
        >
          {(item) => (
            <DropdownItem
              key={item.key}
              color={item.key === "delete" ? "danger" : "default"}
              className={item.key === "delete" ? "text-danger" : ""}
            >
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      <Link href="#" color="primary" className="text-center">
        {t("visit")}
      </Link>
    </div>
  );
};

export default Showcase;
