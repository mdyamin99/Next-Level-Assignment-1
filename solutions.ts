const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

const processInput = (value: number | string | boolean): number | string => {
  if (typeof value === "number") return value * 10;
  else if (typeof value === "string") return value.toLowerCase();
  else {
    if (value === true) return "Active";
    else return "Inactive";
  }
};

const formatCoordinate = (value: readonly [number, number, string]): string => {
  return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};

const answer = async () => {
  try {
    const result = await validateAgeAsync(19);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

answer();