import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Projects() {
    const projects = [
        {
            "name": "Project 1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "link": ""
        },
        {
            "name": "Project 1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "link": ""
        },
        {
            "name": "Project 1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "link": ""
        }
    ]
    return (
        <div className='text-[#ffff] h-screen snap-start' id="projects">
            <Typography variant="h4" component="h4">PROJECTS</Typography>
            <Typography variant="body1">Feel free to reach out to me</Typography>
           <div className="flex flex-wrap gap-4 pt-3">
  {projects.map((data, index) => (
    <Card key={index}  className="w-80">
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 28 }}>
          {data?.name}
        </Typography>

        <Typography variant="body2">
         {data?.description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Project</Button>
      </CardActions>
    </Card>
  ))}
</div>

        </div>
    )
}
