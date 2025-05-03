// src/routes/team/teamLoader.tsx
import teamData from '../../../db.json'; // Import data from your JSON file

// Define the interface for a team member
export interface TeamMember {
  id: string;
  name: string;
  nickname: string;
  title: string;
  main_title: string;
  images?: string;
  social_media: {
    facebook?: string;
    instagram?: string;
    x?: string;
    linkedin?: string;
  };
}

// Function to load team data
export const loadTeamMembers = () => {
  return teamData.members as TeamMember[]; // Cast data to TeamMember type
};

export const getMemberById = (id: string) => {
  // Find the team member by matching the ID from the URL
  return teamData.members.find((member) => member.id === id) || null;
};
