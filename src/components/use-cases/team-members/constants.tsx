import {
  Avatar,
  Button,
  DotsHorizontalIcon,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuOverlay,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  TableColumnType,
  Typography,
} from "usy-ui";

export type MemberRowType = {
  id: string;
  avatarUrl: string;
  name: string;
  role: "Member" | "Supervisor" | "Leader";
};

export const TableColumns: TableColumnType<MemberRowType>[] = [
  {
    key: "avatarUrl",
    title: "Avatar",
    align: "left",
    paddingProps: {
      paddingLeft: "0",
    },
    widthProps: {
      width: "80px",
    },
    renderRow: ({ avatarUrl }) => (
      <Avatar url={avatarUrl} radius="full" size="small" />
    ),
  },
  {
    key: "name",
    title: "Name",
    renderRow: ({ name }) => <Typography>{name}</Typography>,
  },
  {
    key: "role",
    title: "Role",
  },
  {
    key: "action",
    align: "right",
    widthProps: {
      width: "60px",
    },
    paddingProps: {
      padding: "0",
    },
    renderRow: () => (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button size="small" variant="invisible" noSole>
            <DotsHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuOverlay>
          <DropdownMenuItem>
            <Typography size="small">View Profile</Typography>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Typography size="small">Edit Info</Typography>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Typography size="small" color="red">
              Delete
            </Typography>
          </DropdownMenuItem>
        </DropdownMenuOverlay>
      </DropdownMenu>
    ),
  },
];

export const TableData: MemberRowType[] = [
  {
    id: "1",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop",
    name: "Emilia",
    role: "Leader",
  },
  {
    id: "2",
    avatarUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop",
    name: "Zac Harry",
    role: "Supervisor",
  },
  {
    id: "3",
    avatarUrl:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.48&fp-z=1.3&fit=crop",
    name: "Poppy",
    role: "Member",
  },
  {
    id: "4",
    avatarUrl:
      "https://images.unsplash.com/photo-1541823709867-1b206113eafd?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.5&fit=crop",
    name: "Wong",
    role: "Member",
  },
];
