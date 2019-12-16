/** Model taken from nvidia-smi.exe output */
export interface Nvidia {
  name: string
  temperature: string
  gpu_utilization: string
  memory_utilization: string
}
