import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      s: [
        {
          icon: "",
          name: "html"
        },
        {
          icon: "",
          name: "css"
        },
        {
          icon: "",
          name: "sass"
        },
        {
          icon: "",
          name: "Javascript"
        },
        {
          icon: "",
          name: "ReactJs"
        },
        {
          icon: "",
          name: "Redux"
        },
        {
          icon: "",
          name: "TailwindCss"
        },
        {
          icon: "",
          name: "Materia UI"
        },


      ]
    },
    {
      title: "Backend",
      s: [
        {
          icon: "",
          name: "Nodejs"
        },
        {
          icon: "",
          name: "ExpressJs"
        },
        {
          icon: "",
          name: "MongoDB"
        },
        {
          icon: "",
          name: "Django"
        }
      ]
    },
    {
      title: "Languages",
      s: [
        {
          icon: "",
          name: "JavaScript"
        },
        {
          icon: "",
          name: "Python"
        },
          {
          icon: "",
          name: "TypeScript"
        },
          {
          icon: "",
          name: "c"
        }
      ]
    },
    {
      title: "Tools",
      s: [
        {
          icon: "",
          name: "Github"
        },
        {
          icon: "",
          name: "VsCode"
        },
        {
          icon: "",
          name: "PostMan"
        },
        {
          icon: "",
          name: "FigmaS"
        }
      ]
    }
  ]
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Frontend
        </Typography>
        <Button className='pointer-none border-2'>Html</Button>
      </CardContent>
      <CardActions>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div id="skills" className='text-[#ffff] h-screen snap-start'>
      <Typography variant="h4" component="h4">SKILLS</Typography>
      <Typography variant='body1'>A collection of my technical skills and expertise honed through various projects and experiences</Typography>
      <div className="flex flex-wrap justify-between sm:gap-6  mt-3">
      {skills.map((category, index) => (
        <Card key={index} className=" w-full sm:w-[48%] shadow-md hover:shadow-lg transition">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 16, fontWeight: "bold" }}
            >
              {category.title}
            </Typography>

            <div className="flex flex-wrap gap-2 mt-3">
              {category.s.map((item, idx) => (
                <Button
                  key={idx}
                  variant="outlined"
                  className="pointer-none border-2 capitalize"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ))}
    </div>
    </div>
  )
}
