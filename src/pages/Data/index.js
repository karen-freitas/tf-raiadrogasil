import React, {useEffect, useState} from 'react'
import { listEmployee} from '../../services/firebase';

import { Pie, Doughnut, Bar, defaults } from "react-chartjs-2";

const employees = [
  {
    address: "Adm",
    cep: "38051510",
    city: "Uberaba",
    details: "Mais",
    district: "Residencial Nova Era",
    email: "ana@gmail.com",
    id: "qN3lEq4DKPnh3fXIvFUO",
    lastName: "Costa",
    name: "Ana",
    number: "09",
    phone: "19883921032002",
    role: "Rua Hilda Machado de Sene",
    state: "MG",
    color: "Branca",
    gender: "Feminino",
    genderIdentity: "Mulher cisgênera",
    sexualOrientation: "Heterossexual",
    deficiency: "Física",
  },
  {
    address: "Adm",
    cep: "38051510",
    city: "Uberaba",
    details: "Mais",
    district: "Residencial Nova Era",
    email: "ana@gmail.com",
    id: "qN3lEq4DKPnh3fXIvFUO",
    lastName: "Costa",
    name: "Ana",
    number: "09",
    phone: "19883921032002",
    role: "Rua Hilda Machado de Sene",
    state: "MG",
    color: "Preta",
    gender: "Feminino",
    genderIdentity: "Mulher cisgênera",
    sexualOrientation: "Heterossexual",
    deficiency: "Não",
  },
  {
    address: "Adm",
    cep: "38051510",
    city: "Uberaba",
    details: "Mais",
    district: "Residencial Nova Era",
    email: "ana@gmail.com",
    id: "qN3lEq4DKPnh3fXIvFUO",
    lastName: "Costa",
    name: "Ana",
    number: "09",
    phone: "19883921032002",
    role: "Rua Hilda Machado de Sene",
    state: "MG",
    color: "Branca",
    gender: "Masculino",
    genderIdentity: "Mulher cisgênera",
    sexualOrientation: "Heterossexual",
    deficiency: "Visual",
  },
  {
    address: "Adm",
    cep: "38051510",
    city: "Uberaba",
    details: "Mais",
    district: "Residencial Nova Era",
    email: "ana@gmail.com",
    id: "qN3lEq4DKPnh3fXIvFUO",
    lastName: "Costa",
    name: "Ana",
    number: "09",
    phone: "19883921032002",
    role: "Rua Hilda Machado de Sene",
    state: "MG",
    color: "Parda",
    gender: "Masculino",
    genderIdentity: "Mulher cisgênera",
    sexualOrientation: "Heterossexual",
    deficiency: "Auditiva",
  },
  {
    address: "Adm",
    cep: "38051510",
    city: "Uberaba",
    details: "Mais",
    district: "Residencial Nova Era",
    email: "ana@gmail.com",
    id: "qN3lEq4DKPnh3fXIvFUO",
    lastName: "Costa",
    name: "Ana",
    number: "09",
    phone: "19883921032002",
    role: "Rua Hilda Machado de Sene",
    state: "MG",
    color: "Branca",
    gender: "Masculino",
    genderIdentity: "Homem transexual/transgênero",
    sexualOrientation: "Heterossexual",
    deficiency: "Não",
  },
  {
    address: "Adm",
    cep: "38051510",
    city: "Uberaba",
    details: "Mais",
    district: "Residencial Nova Era",
    email: "ana@gmail.com",
    id: "qN3lEq4DKPnh3fXIvFUO",
    lastName: "Costa",
    name: "Ana",
    number: "09",
    phone: "19883921032002",
    role: "Rua Hilda Machado de Sene",
    state: "MG",
    color: "Branca",
    gender: "Masculino",
    genderIdentity: "Homem transexual/transgênero",
    sexualOrientation: "Heterossexual",
    deficiency: "Outra",
  },
];

const male = employees.filter((employee) => employee.gender === "Masculino");
const maleQuantity = male.length;
const female = employees.filter((employee) => employee.gender === "Feminino");
const femaleQuantity = female.length;

const white = employees.filter((employee) => employee.color === "Branca");
const whiteQuantity = white.length;

const black = employees.filter((employee) => employee.color === "Preta");
const blackQuantity = black.length;

const yellow = employees.filter((employee) => employee.color === "Amarela");
const yellowQuantity = yellow.length;

const indian = employees.filter((employee) => employee.color === "Indígena");
const indianQuantity = indian.length;

const brown = employees.filter((employee) => employee.color === "Parda");
const brownQuantity = brown.length;

const otherColor = employees.filter((employee) => employee.color === "Parda");
const otherColorQuantity = otherColor.length;

const noDeficiency = employees.filter(
  (employee) => employee.deficiency === "Não"
);
const noDeficiencyQuantity = noDeficiency.length;

const visual = employees.filter((employee) => employee.deficiency === "Visual");
const visualQuantity = visual.length;

const hearing = employees.filter(
  (employee) => employee.deficiency === "Auditiva"
);
const hearingQuantity = hearing.length;

const physical = employees.filter(
  (employee) => employee.deficiency === "Física"
);
const physicalQuantity = physical.length;

const intellectual = employees.filter(
  (employee) => employee.deficiency === "Intelectual"
);
const intellectualQuantity = intellectual.length;

const otherDeficiency = employees.filter(
  (employee) => employee.deficiency === "Outra"
);
const otherDeficiencyQuantity = otherDeficiency.length;

export default function Data() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
      listEmployee().then((list) => {
        const newEmployees = [];
        list.forEach((doc) => {
          newEmployees.push({ ...doc.data(), id: doc.id, details: 'Mais' });
        });
        setEmployees(newEmployees);
      });
    }, []);

  return (
    <>
      <div style={{ display: "flex", maxWidth: 900 }}>
        <div>
          <Pie
            data={{
              datasets: [
                {
                  // cria-se um vetor data, com os valores a ser dispostos no gráfico
                  data: [femaleQuantity, maleQuantity],
                  // cria-se uma propriedade para adicionar cores aos respectivos valores do vetor data
                  backgroundColor: ["rgba(75, 192, 192)", "rgba(54, 162, 235)"],
                },
              ],
              // cria-se legendas para os respectivos valores do vetor data
              labels: ["Mulheres", "Homens"],
            }}
            height={250}
            width={350}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>

        <div>
          <Doughnut
            data={{
              datasets: [
                {
                  // cria-se um vetor data, com os valores a ser dispostos no gráfico
                  data: [
                    yellowQuantity,
                    whiteQuantity,
                    indianQuantity,
                    brownQuantity,
                    blackQuantity,
                    otherColorQuantity,
                  ],
                  // cria-se uma propriedade para adicionar cores aos respectivos valores do vetor data
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.4)",
                    "rgba(54, 162, 235, 0.4)",
                    "rgba(255, 206, 86, 0.4)",
                    "rgba(75, 192, 192, 0.4)",
                    "rgba(153, 102, 255, 0.4)",
                    "rgba(255, 159, 64, 0.4)",
                  ],
                },
              ],
              // cria-se legendas para os respectivos valores do vetor data
              labels: [
                "Amarela",
                "Branca",
                "Indígena",
                "Parda",
                "Preta",
                "Outra",
              ],
            }}
            height={250}
            width={350}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>

        <div>
          <Bar
            data={{
              datasets: [
                {
                  label: "Número de colaboradores",
                  // cria-se um vetor data, com os valores a ser dispostos no gráfico
                  data: [
                    noDeficiencyQuantity,
                    visualQuantity,
                    hearingQuantity,
                    physicalQuantity,
                    intellectualQuantity,
                    otherDeficiencyQuantity,
                  ],
                  // cria-se uma propriedade para adicionar cores aos respectivos valores do vetor data
                  backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)",
                    "rgba(255, 206, 86)",
                    "rgba(75, 192, 192)",
                    "rgba(153, 102, 255)",
                    "rgba(255, 159, 64)",
                  ],
                },
              ],
              // cria-se legendas para os respectivos valores do vetor data
              labels: [
                "Nenhuma",
                "Visual",
                "Auditiva",
                "Física",
                "Intelectual",
                "Outra",
              ],
            }}
            height={250}
            width={350}
            options={{
              maintainAspectRatio: false,
              indexAxis: "y",
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>

        {/* <Chart
        width={400}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={employees
          
        }
        options={{
          title: 'Population of Largest U.S. Cities',
          chartArea: { width: '30%' },
          hAxis: {
            title: 'Total Population',
            minValue: 0,
          },
          vAxis: {
            title: 'City',
          },
        }}
        legendToggle />
      <Chart
        width={400}
        height={'300px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Year', 'Sales', 'Expenses'],
          ['2013', 1000, 400],
          ['2014', 1170, 460],
          ['2015', 660, 1120],
          ['2016', 1030, 540],
        ]}
        options={{
          title: 'Company Performance',
          hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: '50%', height: '70%' },
          // lineWidth: 25
        }} />
    </div><div style={{ display: 'flex' }}>
        <Chart
          width={400}
          height={'300px'}
          chartType="BubbleChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000],
          ]}
          options={{
            title: 'Correlation between life expectancy, fertility rate ' +
              'and population of some world countries (2010)',
            hAxis: { title: 'Life Expectancy' },
            vAxis: { title: 'Fertility Rate' },
            bubble: { textStyle: { fontSize: 11 } },
          }} />
        <Chart
          width={400}
          height={300}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: 'number', label: 'x' },
              { type: 'number', label: 'values' },
              { id: 'i0', type: 'number', role: 'interval' },
              { id: 'i1', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' },
            ],
            [1, 100, 90, 110, 85, 96, 104, 120],
            [2, 120, 95, 130, 90, 113, 124, 140],
            [3, 130, 105, 140, 100, 117, 133, 139],
            [4, 90, 85, 95, 85, 88, 92, 95],
            [5, 70, 74, 63, 67, 69, 70, 72],
            [6, 30, 39, 22, 21, 28, 34, 40],
            [7, 80, 77, 83, 70, 77, 85, 90],
            [8, 100, 90, 110, 85, 95, 102, 110],
          ]}
          options={{
            intervals: { style: 'sticks' },
            legend: 'none',
          }} /> */}
      </div>

    </>
  );
}